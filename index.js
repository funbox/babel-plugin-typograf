const Typograf = require('typograf');

const placeholder = '__BABEL_PLUGIN_TYPOGRAF__';

function compile(str, opts) {
  const locale = opts.locale || ['ru', 'en-US'];
  const htmlEntity = opts.htmlEntity || undefined;
  const enableRules = opts.enableRules || [];
  const disableRules = opts.disableRules || [];
  const ruleSettings = opts.ruleSettings || [];

  const tp = new Typograf({ htmlEntity, locale });

  enableRules.forEach(rule => tp.enableRule(rule));
  disableRules.forEach(rule => tp.disableRule(rule));
  ruleSettings.forEach(settings => tp.setSetting(...settings));

  return tp.execute(str);
}

module.exports = ({ types }) => ({
  visitor: {
    TaggedTemplateExpression(path, state) {
      if (!types.isIdentifier(path.node.tag, { name: 'T' })) {
        return;
      }

      const quasis = [];

      let rawQuasis = [];
      let cookedQuasis = [];

      path.get('quasi').get('quasis')
        .forEach((el) => {
          rawQuasis.push(el.node.value.raw);
          cookedQuasis.push(el.node.value.cooked);
        });

      rawQuasis = compile(rawQuasis.join(placeholder), state.opts).split(placeholder);
      cookedQuasis = compile(cookedQuasis.join(placeholder), state.opts).split(placeholder);

      if (rawQuasis.length !== cookedQuasis.length) {
        throw new Error('Raw and Cooked values diverge.');
      }

      rawQuasis.forEach((raw, index) => {
        const cooked = cookedQuasis[index];

        quasis.push(types.templateElement({ cooked, raw }));
      });

      path.replaceWith(types.templateLiteral(quasis, path.get('quasi').node.expressions));
    },
  },
});

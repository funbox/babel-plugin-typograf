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

      const fullString = path.get('quasi').get('quasis')
        .map(el => el.node.value.cooked)
        .join(placeholder);

      compile(fullString, state.opts)
        .split(placeholder)
        .forEach((value) => {
          quasis.push(types.templateElement({ cooked: value, raw: value }));
        });

      path.replaceWith(types.templateLiteral(quasis, path.get('quasi').node.expressions));
    },
  },
});

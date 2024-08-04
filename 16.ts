export class DynamicCSSRuleError extends Error {
  static createMessage(message: string, rule: CSSStyleRule, start: number, end: number): string {
    return message + ', '
      + 'in rule: \n\n'
      + rule.selectorText.substring(start - 100, start) + '■■■'
      + rule.selectorText.substring(start, end)
      + '■■■' + rule.selectorText.substring(end, end + 100) + '\n'
      ;
  }

  constructor(message: string, rule: CSSStyleRule, start: number, end: number) {
    super(DynamicCSSRuleError.createMessage(message, rule, start, end));
  }
}


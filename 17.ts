export class CSSRuleRange {
  public readonly rule: CSSStyleRule;
  public readonly start: number;
  public readonly end: number;

  constructor(rule: CSSStyleRule, start: number, end: number) {
    this.rule = rule;
    this.start = start;
    this.end = end;
  }

  get value(): string {
    return this.rule.cssText.slice(this.start, this.end)
  }
}

export class CSSRuleToken {
  public readonly range: CSSRuleRange;

  constructor(range: CSSRuleRange) {
    this.range = range;
  }
}

export class DynamicCSSRuleNameToken extends CSSRuleToken {
  public readonly name: string;

  constructor(range: CSSRuleRange, name: string = range.rule.cssText.slice(range.start, range.end)) {
    super(range);
    this.name = name;
  }
}


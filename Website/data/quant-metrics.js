// Quant scoreboard. value: null = redacted; a number = published (decrypts on load).
// 'auto' = counted from data/coverage.js. format: 'pct' (+12.3%), 'num2' (1.42), 'int' (3).
// Keep backtest numbers labelled hypothetical in `sub`.
window.DC_METRICS = {
  version: '0.2',
  layer: 2,
  layers: 4,
  slots: [
    { label: 'Companies Covered',   value: 'auto', format: 'int',  mask: '▇▇▇',   status: 'Live',              sub: 'S&P 500 · SEC EDGAR' },
    { label: 'Annualized Alpha',    value: null,   format: 'pct',  mask: '▇▇.▇%', status: 'Awaiting backtest', sub: 'vs S&P 500 · hypothetical' },
    { label: 'Sharpe Ratio',        value: null,   format: 'num2', mask: '▇.▇▇',  status: 'Calibrating',       sub: 'Risk-adjusted' },
    { label: 'Strategies Deployed', value: null,   format: 'int',  mask: '▇',     status: 'Layer 4',           sub: 'Live or paper' },
  ],
};

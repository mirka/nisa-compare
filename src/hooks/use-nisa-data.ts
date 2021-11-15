import { useMemo } from "react";

export type NISAData = {
  id: number;
  cumulativeDeposit: number;
  /** Amount newly deposited into the account. */
  deposit: number;
  /** Value of investment at the start of the year. */
  invested: number;
  /** Cumulative profit. */
  profit: number;
  /** Return on investment for the year. */
  roi: number;
  /** Amount that will roll over into the next term, before any returns. */
  rollover: number;
  /** Value of investment at the end of the year. */
  valuation: number;
};

export const useNISAData = ({
  annualDeposit,
  annualDepositMax,
  annualROI,
  depositableYears,
  years = 20,
}): NISAData[] => {
  return Array(years)
    .fill(null)
    .reduce((acc, _, index) => {
      const year = index + 1;

      const rolloverBaseYear = acc[index - depositableYears];
      const rolloverBase =
        (rolloverBaseYear?.rollover ?? 0) *
        Math.pow(1 + annualROI, depositableYears);

      const deposit = Math.max(
        Math.min(annualDepositMax - rolloverBase, annualDeposit),
        0
      );

      const previousYear = acc[index - 1];
      const previousYearValuation = previousYear?.valuation ?? 0;
      const invested = previousYearValuation + deposit;
      const roi = invested * annualROI;
      const valuation = invested + roi;
      const cumulativeDeposit =
        (previousYear?.cumulativeDeposit ?? 0) + deposit;

      return [
        ...acc,
        {
          id: year,
          cumulativeDeposit,
          deposit,
          invested,
          profit: valuation - cumulativeDeposit,
          roi,
          rollover: rolloverBase + deposit,
          valuation,
        },
      ];
    }, []);
};

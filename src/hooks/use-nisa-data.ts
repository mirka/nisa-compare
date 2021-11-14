import { useMemo } from "react";

export type NISAData = {
  id: number;
  investedAmount: number;
  valuation: number;
  roi: number;
  profit: number;
};

export const useNISAData = ({
  annualInvestment,
  annualROI,
  maxInvestment,
  years = 20,
}): NISAData[] => {
  const { data } = useMemo(
    () =>
      Array(years)
        .fill(1)
        .map((val, i) => val + i)
        .reduce(
          ({ data, accumulatedROI }, year, i) => {
            const investedAmount = Math.min(
              annualInvestment * year,
              maxInvestment,
            );
            const initialValuation = investedAmount + accumulatedROI;
            const roi = initialValuation * annualROI;
            const finalValuation = initialValuation + roi;

            return {
              data: [
                ...data,
                {
                  id: year,
                  investedAmount,
                  valuation: finalValuation,
                  roi,
                  profit: finalValuation - investedAmount,
                },
              ],
              accumulatedROI: accumulatedROI + roi,
            };
          },
          { data: [], accumulatedROI: 0 },
        ),
    [annualInvestment, annualROI, maxInvestment, years],
  );

  return data;
};

import { useNISAData } from "./use-nisa-data";

describe("useNISAData", () => {
  const defaultArgs = {
    annualDeposit: 100,
    annualDepositMax: 100,
    annualROI: 0.05,
    depositableYears: 5,
    years: 10,
  };

  it("should return the correct number of years", () => {
    const result = useNISAData(defaultArgs);
    expect(result).toHaveLength(defaultArgs.years);
  });

  it("should not deposit over the max amount", () => {
    useNISAData({
      ...defaultArgs,
      annualDeposit: 200,
      annualDepositMax: 100,
    }).forEach((year) => {
      expect(year.deposit).toBeLessThanOrEqual(100);
      expect(year.cumulativeDeposit).toBeLessThanOrEqual(
        100 * defaultArgs.depositableYears
      );
    });

    useNISAData({
      ...defaultArgs,
      annualDeposit: 40,
      annualDepositMax: 100,
      years: 20,
    }).forEach((year) => {
      expect(year.deposit).toBeLessThanOrEqual(100);
      expect(year.cumulativeDeposit).toBeLessThanOrEqual(
        100 * defaultArgs.depositableYears
      );
    });
  });

  it("should give valuation as the sum of invested and roi", () => {
    useNISAData(defaultArgs).forEach((year) =>
      expect(year.valuation).toBe(year.invested + year.roi)
    );
    useNISAData({ ...defaultArgs, annualDeposit: 40 }).forEach((year) =>
      expect(year.valuation).toBe(year.invested + year.roi)
    );
  });

  it("should give roi as the return on invested", () => {
    useNISAData(defaultArgs).forEach((year) =>
      expect(year.roi).toBe(year.invested * defaultArgs.annualROI)
    );
    useNISAData({ ...defaultArgs, annualDeposit: 40 }).forEach((year) =>
      expect(year.roi).toBe(year.invested * defaultArgs.annualROI)
    );
  });

  it("should give profit as the difference between the cumulative deposit and the valuation", () => {
    useNISAData(defaultArgs).forEach((year) => {
      expect(year.profit).toBe(year.valuation - year.cumulativeDeposit);
    });
  });
});

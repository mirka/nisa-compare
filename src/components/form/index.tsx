/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { useForm } from "react-hook-form";

import * as styles from "./styles";

export default function Form({ setAnnualInvestment, setIsNewNISA, setROI }) {
  const [isNewNISA, _setIsNewNISA] = useState(false);
  const getMaxInvestment = (isNewNISA) => (isNewNISA ? 122 : 120);
  const maxInvestment = getMaxInvestment(isNewNISA);

  const { register, setValue, handleSubmit, reset } = useForm({
    defaultValues: {
      annualInvestment: maxInvestment,
      isNewNISA: false,
      roi: 5,
    },
  });
  const onSubmit = ({ annualInvestment, isNewNISA, roi }) => {
    setAnnualInvestment(annualInvestment * 10000);
    setROI(roi / 100);
    setIsNewNISA(isNewNISA);
  };

  return (
    <form css={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div css={styles.mainColumn}>
        <div css={styles.column}>
          <div>
            <label css={styles.label} htmlFor="annual-investment">
              買付額（年）
            </label>
            <div css={styles.inputWithUnit}>
              <input
                id="annual-investment"
                css={styles.input}
                type="number"
                inputMode="numeric"
                pattern="[0-9]*"
                min={40}
                max={maxInvestment}
                {...register('annualInvestment', {
                  required: true,
                  min: 40,
                  max: maxInvestment,
                })}
              />
              万円
            </div>
          </div>
          <label css={styles.checkbox}>
            <input
              type="checkbox"
              {...register('isNewNISA', {
                onChange: (event) => {
                  const newValue = event.target.checked;
                  _setIsNewNISA(newValue);
                  setValue('annualInvestment', getMaxInvestment(newValue));
                },
              })}
            />
            新NISA（2024年〜）
          </label>
        </div>

        <div css={styles.column}>
          <label css={styles.label} htmlFor="roi">
            ROI（年率）
          </label>
          <div css={styles.inputWithUnit}>
            <input
              id="roi"
              css={styles.input}
              type="number"
              inputMode="numeric"
              pattern="[0-9]*"
              min={0}
              max={50}
              {...register('roi', { required: true, min: 0, max: 50 })}
            />
            %
          </div>
        </div>
      </div>

      <div css={styles.buttonsColumn}>
        <input css={styles.btnSubmit} type="submit" value="計算する" />
        <button css={styles.btnReset} onClick={() => reset()}>
          リセット
        </button>
      </div>
    </form>
  );
}

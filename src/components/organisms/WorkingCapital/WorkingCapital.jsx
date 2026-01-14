import styles from "./WorkingCapital.module.scss";
import { useWorkingCapitalRequest } from "../../../hooks/useFinancial";
import WorkingCapitalHeader from "../../molecules/Chart/WorkingCapitalHeader/WorkingCapitalHeader";
import WorkingCapitalChart from "../../molecules/Chart/WorkingCapitalChart/WorkingCapitalChart";

import { useState } from "react";

import SkeletonChart from "../../Skeleton/SkeletonChart/SkeletonChart";

export default function WorkingCapitalSection() {
  const { data: apiResponse, isLoading, isError } = useWorkingCapitalRequest();
  const [selectedPeriod, setSelectedPeriod] = useState("last7days");

  const response = apiResponse?.data;
  const chartData = response?.data || [];

  return (
    <section className={styles.container}>
      <WorkingCapitalHeader
        period={selectedPeriod}
        onPeriodChange={setSelectedPeriod}
      />

      {isLoading && <SkeletonChart />}

      {!isLoading && isError && (
        <div className={styles.error}>Chart data unavailable.</div>
      )}

      {!isLoading && !isError && (
        <WorkingCapitalChart
          data={chartData}
          currency={response.currency}
        />
      )}
    </section>
  );
}


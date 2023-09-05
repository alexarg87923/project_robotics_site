type ReportHandler = (...args: any[]) => void;

const reportWebVitals = (onPerfEntry?: ReportHandler): void => {
  if (onPerfEntry != null && onPerfEntry instanceof Function) {
    void import('web-vitals')
      .then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
      })
      .catch(error => {
        console.error('Error importing web-vitals:', error);
      });
  }
};

export default reportWebVitals;

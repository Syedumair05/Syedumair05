import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader">
      <div className="preloader-spinner"></div>
      <div className="gradient-text code-font fw-bold fs-4">&lt;Syed Umair Ahmed /&gt;</div>
      <small className="text-muted mt-2">Loading Portfolio Experience...</small>
    </div>
  );
};

export default Preloader;

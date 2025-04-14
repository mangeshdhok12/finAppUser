// src/components/SkeletonLoader.jsx
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonLoader = () => {
  return (
    <div className="p-4">
      <Skeleton height={30} width={200} />
      <Skeleton count={5} height={20} style={{ marginTop: '10px' }} />
    </div>
  );
};

export default SkeletonLoader;

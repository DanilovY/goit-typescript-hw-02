interface LoadMoreBtnProps {
  loadMore: () => void;
}

const LoadMoreBtn = ({ loadMore }: LoadMoreBtnProps) => {
  return (
    <div>
      <button onClick={loadMore}>Load More</button>
    </div>
  );
};

export default LoadMoreBtn;

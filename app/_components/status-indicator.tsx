const StatusIndicator = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative mr-2 flex h-3 w-3 items-center justify-center">
        <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-500"></span>
        <span className="relative h-3 w-3 rounded-full bg-emerald-500"></span>
      </div>
      <span>Disponível para freelance e oportunidades full-time</span>
    </div>
  );
};

export default StatusIndicator;

interface DateSeparatorProps {
  date: string;
}

export function DateSeparator({ date }: DateSeparatorProps) {
  return (
    <div className="my-6 flex items-center gap-4">
      <div className="h-px flex-1 bg-line" />
      <span className="text-[11px] uppercase tracking-[0.15em] text-muted-strong">
        {date}
      </span>
      <div className="h-px flex-1 bg-line" />
    </div>
  );
}

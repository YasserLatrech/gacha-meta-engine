import React from 'react';

interface AdSlotProps {
  slotId: string;
  label: string;
  dimensions: string;
  minHeightPx: number;
  sticky?: boolean;
  description?: string;
}

export function AdSlot({
  slotId,
  label,
  dimensions,
  minHeightPx,
  sticky = false,
  description,
}: AdSlotProps) {
  return (
    <aside
      data-ad-slot={slotId}
      aria-label={`Advertisement ${label}`}
      style={{
        minHeight: `${minHeightPx}px`,
        height: `${minHeightPx}px`,
        background: 'var(--ad-bg)',
        border: '1.5px dashed var(--ad-border)',
        borderRadius: '4px',
        padding: '10px 14px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: sticky ? 'sticky' : 'relative',
        top: sticky ? '14px' : undefined,
        overflow: 'hidden',
      }}
    >
      <div
        className="mono"
        style={{
          background: 'var(--bg-subnav)',
          color: '#FFFFFF',
          fontSize: '10.5px',
          fontWeight: 800,
          padding: '2px 8px',
          borderRadius: '2px',
          letterSpacing: '0.03em',
        }}
      >
        {label} ({dimensions})
      </div>
      {description && (
        <div
          style={{
            fontSize: '10.5px',
            color: 'var(--text-muted)',
            fontWeight: 700,
            marginTop: '4px',
          }}
        >
          {description}
        </div>
      )}
    </aside>
  );
}

import RelationBadge from '@components/common/badge/relationBadge/RelationBadge.jsx';

export default function Docs() {
  return (
    <div
      style={{
        display: 'flex',
        gap: '20px',
        flexDirection: 'column',
        margin: '20px',
      }}
    >
      <RelationBadge badgeName={'지인'} />
    </div>
  );
}

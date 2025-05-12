const ChatTab = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px', backgroundColor: 'white', borderRadius: '12px' }}>
      {/* Title */}
      <div style={{ fontSize: '20px', fontWeight: 600, color: '#111' }}>Find experts</div>

      {/* Step List UI */}
      <div style={{ borderRadius: '16px', border: '1px solid #e5e7eb', backgroundColor: 'white', padding: '16px' }}>
        <ol style={{ position: 'relative', borderLeft: '1px solid #d1d5db', marginLeft: '12px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
            <span style={{ marginTop: '4px', width: '12px', height: '12px', backgroundColor: 'white', border: '2px solid #6C5DD3', borderRadius: '9999px', boxShadow: '0 0 0 2px #6C5DD3' }} />
            <p style={{ fontSize: '14px', color: '#374151' }}>Read full documents for key details</p>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
            <span style={{ marginTop: '4px', width: '12px', height: '12px', backgroundColor: 'white', border: '2px solid #6C5DD3', borderRadius: '9999px', boxShadow: '0 0 0 2px #6C5DD3' }} />
            <p style={{ fontSize: '14px', color: '#374151' }}>Reflect on the results</p>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
            <span style={{ marginTop: '4px', width: '12px', height: '12px', backgroundColor: 'white', border: '2px solid #d1d5db', borderRadius: '9999px', boxShadow: '0 0 0 2px #d1d5db' }} />
            <p style={{ fontSize: '14px', color: '#9ca3af' }}>Generate response based on the results</p>
          </li>
        </ol>
      </div>

      {/* Experts */}
      <div style={{ fontSize: '14px', color: '#374151' }}>
        <p style={{ marginBottom: '8px' }}>In this document, several experts are mentioned:</p>
        <ul style={{ paddingLeft: '20px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <li><strong style={{ color: '#111827' }}>Alice Thompson:</strong> Author of the document</li>
          <li><strong style={{ color: '#111827' }}>Raj Patel:</strong> Involved in discussions related to the Okta connector and group information</li>
          <li><strong style={{ color: '#111827' }}>Michael Lee:</strong> Participated in discussions regarding use cases and group information</li>
        </ul>
      </div>
    </div>
  );
};

export default ChatTab;
'use client';

import VoiceAssistTabStub from '@/components/VoiceAssistTabStub';
import CallList from '@/components/CallList';
import { Box, Card } from '@twilio-paste/core';
import React from 'react';
import { useEffect } from 'react';

export default function Home() {
  const [sid, setSid] = React.useState<string>();

  /*
   *
   * Get the call sid
   *
   */
  useEffect(() => {
    // Parse pid query parameter (optional)
    const searchParams = new URLSearchParams(document.location.search);
    if (searchParams.get('sid')) {
      const incomingSid = searchParams.get('sid') || '';
      setSid(incomingSid);
      console.log(`Setting call sid from search params [${incomingSid}]`);
    }

    console.log(`Using SID [${sid}]`);
  }, []);

  if (sid)
    return (
      <Box
        position="fixed" // Use "absolute" if "fixed" doesn't fit your use case
        top={0}
        right={0}
        bottom={0}
        left={0}
        backgroundSize="cover" // This ensures that the background covers the full screen
        backgroundPosition="center" // This centers the background image
        overflow={'scroll'}
      >
        <VoiceAssistTabStub callSid={sid} />
      </Box>
    );

  return <CallList />;
}

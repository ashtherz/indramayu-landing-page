import React from 'react';
import { motion } from 'framer-motion';

const WaveBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* First Wave */}
    <motion.div
      className="absolute w-full h-[800px] bottom-0"
      style={{
        background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23dbeafe' fill-opacity='0.2' d='M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat-x',
        backgroundSize: '1440px 320px'
      }}
      animate={{ x: [0, -1440] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    />
    {/* Second Wave */}
    <motion.div
      className="absolute w-full h-[800px] bottom-0"
      style={{
        background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23dbeafe' fill-opacity='0.3' d='M0,160L48,165.3C96,171,192,181,288,165.3C384,149,480,107,576,122.7C672,139,768,213,864,229.3C960,245,1056,203,1152,186.7C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat-x',
        backgroundSize: '1440px 320px'
      }}
      animate={{ x: [-1440, 0] }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
    />
    {/* Third Wave */}
    <motion.div
      className="absolute w-full h-[800px] bottom-0"
      style={{
        background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23dbeafe' fill-opacity='0.1' d='M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,122.7C672,149,768,235,864,261.3C960,288,1056,256,1152,234.7C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat-x',
        backgroundSize: '1440px 320px'
      }}
      animate={{ x: [0, -1440] }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

export default WaveBackground;

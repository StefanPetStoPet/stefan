import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OrbitingCircles from '@/components/OrbitingCircles';

const highlightWords = [
  'quality',
  'trust',
  'authenticity',
  'passion',
  'care',
  'purpose',
  'curiosity',
  'honest',
  'foundation',
  'loyal',
  'impact',
];

function HighlightedWord({ word, darkMode }) {
  return (
    <span
      className={`
        text-yellow-400 font-semibold relative
        before:absolute before:-inset-1 before:-z-10 before:rounded-md
        before:blur-md
        ${darkMode ? 'text-yellow-300 before:bg-yellow-300/30' : 'before:bg-yellow-400/30'}
      `}
    >
      {word}
    </span>
  );
}

function splitAndHighlight(sentence, darkMode) {
  return sentence.split(' ').map((word, idx) => {
    const cleanWord = word.toLowerCase().replace(/[.,—“”"']/g, '');
    if (highlightWords.includes(cleanWord)) {
      return <HighlightedWord key={idx} word={word} darkMode={darkMode} />;
    }
    return word + ' ';
  });
}

export default function About({ darkMode, toggleDarkMode }) {
  const sentences = [
    'I believe this isn’t just about aesthetics — it’s about what beauty represents: effort, taste, and passion.',
    'The way you present yourself shows people how much you care.',
    'It reflects your values and the quality you put into everything you do.',
    'To connect this to my work: when your website looks thoughtfully crafted, visitors naturally assume your product or service will be just as good.',
    'Just like when you meet people who are dressed well, articulate, and clean—you’re more willing to work with them compared to someone who presents themselves with an attitude of “it’s good enough.”',
    'Design is more than just visuals. It’s about simplicity, attention to detail, and authenticity.',
    'When a website is built with care—driven by passion and purpose, not just profit—it creates trust.',
    'And trust sparks curiosity, inviting visitors to explore more, engage deeper, and become customers—which ironically leads to greater profits than being solely profit-driven.',
    'In my work, every pixel, every interaction, and every feature is designed with purpose—to help your business grow by connecting you with your audience in an honest, quality-driven way.',
    'For me, great design isn’t a luxury — it’s a foundation.',
    'It’s what turns visitors into loyal customers and ideas into impact.',
    'If you want a website that truly reflects your passion and helps your business thrive, let’s create it together.',
  ];

  const [visibleWordsCount, setVisibleWordsCount] = useState(sentences.map(() => 0));

  useEffect(() => {
    let timeoutId;
    let sentenceIndex = 0;
    let wordIndex = 0;

    function revealNextWord() {
      if (sentenceIndex >= sentences.length) return;

      setVisibleWordsCount((prev) => {
        const newCounts = [...prev];
        newCounts[sentenceIndex] = wordIndex + 1;
        return newCounts;
      });

      wordIndex++;

      if (wordIndex > sentences[sentenceIndex].split(' ').length) {
        sentenceIndex++;
        wordIndex = 0;
        timeoutId = setTimeout(revealNextWord, 150);
      } else {
        timeoutId = setTimeout(revealNextWord, 100);
      }
    }

    timeoutId = setTimeout(revealNextWord, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div
      className={`relative min-h-screen overflow-hidden transition-colors duration-500 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-[#f6f7fc] text-black'
      }`}
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 z-0 opacity-50 blur-3xl scale-[2.5] pointer-events-none">
        <OrbitingCircles colors={['bg-blue-700', 'bg-blue-500', 'bg-blue-900']} />
      </div>

      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24 relative z-10 font-serif italic text-xl leading-loose tracking-wide space-y-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className={`flex items-center justify-center gap-3 text-3xl font-serif italic select-none ${
            darkMode ? 'text-yellow-400' : 'text-blue-800'
          }`}
          style={{
            textShadow: '0 0 8px rgba(0,0,0,0.3)',
          }}
        >
          <FaQuoteLeft className={`${darkMode ? 'text-yellow-400' : 'text-blue-900'} text-3xl`} />
Beauty will save the world.
<FaQuoteLeft className={`${darkMode ? 'text-yellow-400' : 'text-blue-900'} rotate-180 text-3xl`} />

        </motion.p>

        {sentences.map((sentence, i) => {
          const words = sentence.split(' ');
          const visibleCount = visibleWordsCount[i] || 0;
          const visibleWords = words.slice(0, visibleCount);

          return (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: visibleCount > 0 ? 1 : 0, y: visibleCount > 0 ? 0 : 10 }}
              transition={{ duration: 0.5 }}
              style={{
                textShadow: '0 0 8px rgba(0,0,0,0.3)',
                minHeight: '2.5rem',
              }}
            >
              {visibleWords.map((word, idx) => {
                const cleanWord = word.toLowerCase().replace(/[.,—“”"']/g, '');
                if (highlightWords.includes(cleanWord)) {
                  return (
                    <span
                      key={idx}
                      className={`
                        font-semibold relative before:absolute before:-inset-1 before:-z-10 before:rounded-md before:blur-md
                        ${darkMode ? 'text-yellow-300 before:bg-yellow-300/30' : 'text-blue-900 before:bg-blue-400/30'}
                      `}
                      style={{ marginRight: '0.25rem' }}
                    >
                      {word}
                    </span>
                  );
                }
                return word + (idx !== visibleWords.length - 1 ? ' ' : '');
              })}
            </motion.p>
          );
        })}
      </main>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 1.4,
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.2,
        }}
      >
        <Footer />
      </motion.div>
    </div>
  );
}

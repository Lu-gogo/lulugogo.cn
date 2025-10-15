import { useState, useRef } from 'react';
import { ClipboardDocumentIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';

type InfoType = 'penguin' | 'email' | null;

export default function ContactButtons() {
  const [activeInfo, setActiveInfo] = useState<InfoType>(null);
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (infoType: InfoType) => {
    if (activeInfo === infoType) {
      setActiveInfo(null);
    } else {
      setActiveInfo(infoType);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      // 清除之前的定时器（如果有）
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // 设置新的定时器，3秒后重置复制状态
      timeoutRef.current = setTimeout(() => {
        setCopied(false);
      }, 3000);
    } catch (err) {
      console.error('复制失败:', err);
      // 回退到老方法
      fallbackCopy(text);
    }
  };

  const fallbackCopy = (text: string) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();

    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('回退复制方法失败:', err);
    } finally {
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-20 justify-center items-center py-10">
      {/* 我的企鹅按钮 */}
      <div className="relative">
        <div
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer group"
          onMouseEnter={() => handleMouseEnter('penguin')}
        >
          我的企鹅
        </div>

        {/* 企鹅信息框 */}
        <div
          className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 rounded-xl border border-pink-200 bg-white text-pink-600 p-6 text-center shadow-2xl z-10 min-w-max transition-all duration-300 ${activeInfo === 'penguin' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}
        >
          {/* 信息内容 - 添加复制功能 */}
          <div
            className="flex items-center justify-center gap-2 cursor-pointer group relative px-4 py-2 rounded-lg hover:bg-pink-50 transition-colors"
            onClick={() => copyToClipboard('320602150')}
          >
            <span className="font-mono font-medium ">320602150</span>

            {/* 复制图标 */}
            {copied ? (
              <ClipboardDocumentCheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
            ) : (
              <ClipboardDocumentIcon className="w-5 h-5 text-pink-500 group-hover:text-pink-700 transition-colors flex-shrink-0" />
            )}

          </div>

          {/* 复制成功提示 */}
        </div>
      </div>

      {/* 我的github按钮 */}
      <div className="relative">
        <div
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer group"
          onMouseEnter={() => handleMouseEnter('email')}
        >
          我的gitHub
        </div>

        {/* GitHub信息框 */}
        <div className={`italic absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 rounded-xl border-pink-200 bg-white text-pink-600 p-6 z-10 min-w-max border border-purple-200 transition-all duration-300 ${activeInfo === 'email' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
          {/* 信息内容 */}
          <a
            href="https://github.com/Lu-gogo"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-violet-600/30 flex items-center justify-center gap-2 group"
          >
            <span>lu-gogo的GitHub</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500 group-hover:text-pink-700 transition-colors" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
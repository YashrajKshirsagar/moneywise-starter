import React, { useState } from 'react';
import { SEO_MATRIX_DATA, SEO_METHODOLOGY_NOTE } from '../data/matrixData';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  FileSpreadsheet, 
  Search, 
  ExternalLink, 
  Download, 
  HelpCircle, 
  Info, 
  CheckCircle2,
  Edit3
} from 'lucide-react';

interface MatrixViewProps {
  onNavigate: (path: string) => void;
}

export const MatrixView: React.FC<MatrixViewProps> = ({ onNavigate }) => {
  const [matrixData, setMatrixData] = useState(SEO_MATRIX_DATA);
  const [editMode, setEditMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = matrixData.filter(
    (row) =>
      row.page.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.mainKeyword.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.relatedKeywords.some((k) => k.toLowerCase().includes(searchTerm.toLowerCase())) ||
      row.questionItAnswers.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleVolumeChange = (index: number, newVolume: string) => {
    const updated = [...matrixData];
    updated[index].searchVolume = newVolume;
    setMatrixData(updated);
  };

  const handleExportCSV = () => {
    const headers = [
      'Page',
      'Main Keyword',
      'Related Keyword 1',
      'Related Keyword 2',
      'Search Intent',
      'Search Volume',
      'Question It Answers'
    ];

    const rows = matrixData.map((r) => [
      `"${r.page}"`,
      `"${r.mainKeyword}"`,
      `"${r.relatedKeywords[0]}"`,
      `"${r.relatedKeywords[1]}"`,
      `"${r.searchIntent}"`,
      `"${r.searchVolume}"`,
      `"${r.questionItAnswers.replace(/"/g, '""')}"`
    ]);

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'MoneyWise_Starter_SEO_Project_Matrix.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'Table',
    name: 'MoneyWise Starter SEO Project Matrix',
    about: 'College SEO and Answer Engine Optimization (AEO) keyword planning matrix for MoneyWise Starter educational blog.',
    url: 'https://moneywisestarter.edu/seo-project-matrix/'
  };

  return (
    <>
      <SEOHead
        title="SEO Project Matrix – Keyword Research & Intent Mapping | MoneyWise Starter"
        description="Comprehensive SEO Project Matrix for MoneyWise Starter: primary keyword mapping, search intent classification, and Answer Engine Optimization (AEO) questions."
        canonicalUrl="https://moneywisestarter.edu/seo-project-matrix/"
        ogType="website"
        jsonLd={jsonLdData}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { label: 'Home', path: '/' },
            { label: 'SEO Project Matrix' }
          ]}
          onNavigate={onNavigate}
        />

        {/* Page Header */}
        <header className="mb-10 space-y-4">
          <div className="text-xs uppercase tracking-widest font-semibold text-[#8b6b23]">
            Academic Coursework Deliverable
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#16382c] tracking-tight">
            SEO Project Matrix & Keyword Architecture
          </h1>

          <p className="text-base sm:text-lg font-serif italic text-[#4e5c54] max-w-3xl leading-relaxed">
            A comprehensive mapping of target search queries, search intent, volume verification parameters, and Answer Engine Optimization (AEO) direct questions for all six web pages.
          </p>

          <p className="text-sm text-[#5d6c64] max-w-3xl leading-relaxed">
            This project matrix documents the strategic keyword architecture developed for the college SEO and AEO assignment. It demonstrates how user search intent is systematically aligned with informative content structures and structured microdata across MoneyWise Starter.
          </p>
        </header>

        {/* Assignment Verification Notice (Requirement 4) */}
        <div className="bg-[#f5efe4] border border-[#dfd7c6] rounded-xl p-5 mb-8 flex items-start gap-3.5">
          <Info className="w-5 h-5 text-[#8b6b23] shrink-0 mt-0.5" />
          <div className="text-xs text-[#526058] space-y-1.5 leading-relaxed">
            <p className="font-semibold text-[#16382c]">
              Academic Integrity Notice: Search Volume Verification
            </p>
            <p>
              In accordance with academic coursework standards, all search volumes in this matrix are designated as{' '}
              <strong className="text-[#16382c]">“Verify in keyword research tool”</strong> until empirical data is logged by the student. Real-time search volumes fluctuate depending on monthly seasonality and geographic targeting. Actual search-volume data must be verified using a professional SEO keyword tool such as{' '}
              <a
                href="https://neilpatel.com/ubersuggest/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#16382c] font-semibold underline hover:text-[#8b6b23]"
              >
                Ubersuggest
              </a>
              , Google Keyword Planner, Ahrefs, or Semrush.
            </p>
          </div>
        </div>

        {/* Toolbar Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#7c8b82]" />
            <input
              type="text"
              placeholder="Filter by keyword, page, or question..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-[#cfc6b5] rounded-md text-xs sm:text-sm text-[#16382c] placeholder:text-[#8b9991] focus:outline-none focus:ring-2 focus:ring-[#16382c]"
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setEditMode(!editMode)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-md border transition-colors ${
                editMode
                  ? 'bg-[#16382c] text-white border-[#16382c]'
                  : 'bg-white text-[#16382c] border-[#cfc6b5] hover:bg-[#f7f4ee]'
              }`}
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>{editMode ? 'Finish Editing Volumes' : 'Edit Search Volumes'}</span>
            </button>

            <button
              type="button"
              onClick={handleExportCSV}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#16382c] bg-[#ede7db] rounded-md hover:bg-[#e2dacb] transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {/* The Six-Column SEO Project Matrix Table (Requirement 4) */}
        <div className="overflow-x-auto rounded-xl border border-[#ded6c7] bg-white shadow-sm mb-12">
          <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[900px]">
            <thead>
              <tr className="bg-[#f0eae0] border-b border-[#ded6c7] text-[#16382c]">
                <th className="p-4 font-semibold uppercase tracking-wider text-xs w-[18%]">
                  1. Page
                </th>
                <th className="p-4 font-semibold uppercase tracking-wider text-xs w-[18%]">
                  2. Main Keyword
                </th>
                <th className="p-4 font-semibold uppercase tracking-wider text-xs w-[20%]">
                  3. Two Related Keywords
                </th>
                <th className="p-4 font-semibold uppercase tracking-wider text-xs w-[12%]">
                  4. Search Intent
                </th>
                <th className="p-4 font-semibold uppercase tracking-wider text-xs w-[14%]">
                  5. Search Volume
                </th>
                <th className="p-4 font-semibold uppercase tracking-wider text-xs w-[18%]">
                  6. Question It Answers
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#eee7da]">
              {filteredData.map((row, index) => (
                <tr key={index} className="hover:bg-[#faf7f2] transition-colors">
                  {/* Column 1: Page */}
                  <td className="p-4 align-top">
                    <button
                      type="button"
                      onClick={() => {
                        onNavigate(row.path);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="font-semibold text-[#16382c] hover:underline text-left block"
                    >
                      {row.page}
                    </button>
                    <span className="text-[11px] font-mono text-[#7b8b82] block mt-0.5">
                      {row.path}
                    </span>
                  </td>

                  {/* Column 2: Main Keyword */}
                  <td className="p-4 align-top">
                    <span className="font-mono font-medium text-[#16382c] bg-[#f5efe4] px-2 py-1 rounded inline-block">
                      {row.mainKeyword}
                    </span>
                  </td>

                  {/* Column 3: Two Related Keywords */}
                  <td className="p-4 align-top">
                    <ul className="space-y-1.5 text-xs text-[#44524a]">
                      {row.relatedKeywords.map((rk, rkIdx) => (
                        <li key={rkIdx} className="font-mono flex items-center gap-1.5">
                          <span className="text-[#8b6b23]">•</span>
                          <span>{rk}</span>
                        </li>
                      ))}
                    </ul>
                  </td>

                  {/* Column 4: Search Intent */}
                  <td className="p-4 align-top">
                    <span className="inline-block text-xs font-medium text-[#16382c]">
                      {row.searchIntent}
                    </span>
                  </td>

                  {/* Column 5: Search Volume */}
                  <td className="p-4 align-top">
                    {editMode ? (
                      <input
                        type="text"
                        value={row.searchVolume}
                        onChange={(e) => handleVolumeChange(index, e.target.value)}
                        className="w-full px-2 py-1 border border-[#16382c] rounded text-xs font-mono bg-white"
                      />
                    ) : (
                      <span className="text-xs italic text-[#63726a] font-medium leading-tight block">
                        {row.searchVolume}
                      </span>
                    )}
                  </td>

                  {/* Column 6: Question It Answers */}
                  <td className="p-4 align-top">
                    <p className="text-xs font-medium text-[#2d3a33] leading-relaxed">
                      “{row.questionItAnswers}”
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Deep SEO & AEO Analysis Framework */}
        <section className="space-y-8">
          <div className="border-t border-[#ded6c7] pt-8">
            <h2 className="text-2xl font-serif font-bold text-[#16382c] mb-3">
              SEO & AEO Architecture Rationale
            </h2>
            <p className="text-sm text-[#526058] max-w-3xl leading-relaxed">
              How MoneyWise Starter implements modern search engine optimization (SEO) and Answer Engine Optimization (AEO) best practices for this assignment:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#f5efe4] p-6 rounded-xl border border-[#ded6c7]">
              <h3 className="text-base font-serif font-bold text-[#16382c] mb-2">
                1. Informational Search Intent Alignment
              </h3>
              <p className="text-xs text-[#526058] leading-relaxed">
                All 6 pages target purely informational intent. Beginners seek clear explanations, step-by-step instructions, and baseline rules of thumb rather than commercial products or broker sales pitches. Content provides impartial education before introducing any complex decisions.
              </p>
            </div>

            <div className="bg-[#f5efe4] p-6 rounded-xl border border-[#ded6c7]">
              <h3 className="text-base font-serif font-bold text-[#16382c] mb-2">
                2. Answer Engine Optimization (AEO) Modules
              </h3>
              <p className="text-xs text-[#526058] leading-relaxed">
                Modern AI search tools (Google AI Overviews, Perplexity, Bing Copilot) extract concise 40-to-60-word answers situated directly under question-based H2 headings. Each article features a dedicated direct-response answer block engineered for snippet extraction.
              </p>
            </div>

            <div className="bg-[#f5efe4] p-6 rounded-xl border border-[#ded6c7]">
              <h3 className="text-base font-serif font-bold text-[#16382c] mb-2">
                3. Semantic Structure & Microdata
              </h3>
              <p className="text-xs text-[#526058] leading-relaxed">
                Every page integrates valid JSON-LD schemas (WebSite on homepage, BlogPosting on individual guides, and Table on the matrix). Semantic HTML tags (header, nav, main, article, section, footer) maintain programmatic clarity for web crawlers.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

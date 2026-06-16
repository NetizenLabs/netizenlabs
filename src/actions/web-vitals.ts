'use server';

export async function analyzeWebVitals(url: string) {
  try {
    // Validate URL
    new URL(url);

    // Call Google PageSpeed Insights API
    // We use mobile strategy by default as it's the standard for Core Web Vitals
    const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&category=performance&strategy=mobile`;
    
    const response = await fetch(apiUrl, { cache: 'no-store' });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch from PageSpeed API: ${response.statusText}`);
    }

    const data = await response.json();

    // Extract relevant Core Web Vitals
    const lighthouse = data.lighthouseResult;
    const audits = lighthouse.audits;
    const categories = lighthouse.categories;

    return {
      success: true,
      data: {
        score: Math.round(categories.performance.score * 100),
        metrics: {
          lcp: {
            displayValue: audits['largest-contentful-paint'].displayValue,
            score: audits['largest-contentful-paint'].score,
          },
          fcp: {
            displayValue: audits['first-contentful-paint'].displayValue,
            score: audits['first-contentful-paint'].score,
          },
          cls: {
            displayValue: audits['cumulative-layout-shift'].displayValue,
            score: audits['cumulative-layout-shift'].score,
          },
          tbt: {
            displayValue: audits['total-blocking-time'].displayValue,
            score: audits['total-blocking-time'].score,
          },
          speedIndex: {
            displayValue: audits['speed-index'].displayValue,
            score: audits['speed-index'].score,
          }
        },
        diagnostics: audits['diagnostics']?.details?.items || [],
      }
    };
  } catch (error: any) {
    console.error('Web Vitals Action Error:', error);
    return {
      success: false,
      error: error.message || 'Failed to analyze URL'
    };
  }
}

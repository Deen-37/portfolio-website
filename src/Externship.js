// import react from 'react';

export default function Externship(){
    return <>
        <div className='externship'>
            <div className='d-flex flex-column'>
                <span className='company-name'>
                    Extern.com 
                </span>
                <span className='date'>
                    JUNE 2025 - August 2025
                </span>
            </div>
            <div className='d-flex flex-column'>0
                <span className='position'> Operational Strategy Analyst </span>
                <span className='position-description'>
                    <ul>
                        <li>Designed and deployed a Natural Language Processing (NLP) pipeline (tokenization, stopword removal, lemmatization, POS tagging) to analyze 500+ employee reviews, reducing manual analysis effort by ~70%.</li>
                        <li>Conducted sentiment analysis with TextBlob + pandas across Glassdoor and YouTube datasets, generating polarity/subjectivity insights with 85%+ accuracy across 3 employee segments.</li>
                        <li>Enabled scalable, reproducible sentiment analysis, as measured by successful automated runs in Google Colab, by integrating nltk, TextBlob, pandas, and matplotlib into a fully modular pipeline with visualizations.</li>
                    </ul>
                </span>

            </div>
        </div>


    </>;
}
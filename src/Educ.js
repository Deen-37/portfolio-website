// import react from 'react';
import "./educ.css";
export default function
Education () {
    return(
        <>
        <div className="description d-flex flex-column">
            <div className="education-one my-4 justify-content-between d-flex flex-row">
                <div className="d-flex flex-column new-one">
                    <span className = 'university-name'>
                        University of District of Columbia
                    </span>
                    <span className = 'university-degree'>
                        Bachelor's of Science in Computer Science
                    </span>
                </div>
                <div>
                        <span className= "attended"> 2025 - 2027 </span>
                    </div>
            </div>
            <div className="education-one my-4 justify-content-between d-flex flex-row">
                <div className="d-flex flex-column new-one">
                    <span className = 'university-name'>
                        Northern Virginia Community College
                    </span>
                    <span className = 'university-degree'>
                        Associate of Science in Computer Science
                    </span>
                </div>
                <div>
                        <span className= "attended"> 2023 - 2025 </span>
                    </div>
            </div>
            
        </div>
        </>
    );

}

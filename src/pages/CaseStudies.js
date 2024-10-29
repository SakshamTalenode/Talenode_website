import { useState } from "react";
import cs1Default from "../assets/blog 1.jpg";
import cs1 from "../assets/cs1.mp4";
import cs2 from "../assets/cs2.png";
import cs3 from "../assets/cs3.png";

const CaseStudies = () => {
  const [currCS, setCurrCS] = useState(1);

  return (
    <div>
      <div className="blogsPage">
        <p className="header-heroProduct">Case Studies</p>

        <div className="blog-topics">
          <button
            className={currCS == "1" ? "blog-card curr-blogCard" : "blog-card"}
            onClick={() => setCurrCS(1)}
          >
            <div>
              <video playsinline autoplay="1" muted loop>
                <source src={cs1} type="video/mp4" />
              </video>
              <p className="blogCard-header">
                How Talenode Helped a Consumer Tech Unicorn Achieve 16% Wage
                Bill Savings
              </p>
            </div>
            <p className="blogCard-tag">
              A leading Consumer Tech Unicorn aimed to enhance profitability,
              but...
            </p>
          </button>

          <button
            className={currCS == "2" ? "blog-card curr-blogCard" : "blog-card"}
            onClick={() => setCurrCS(2)}
          >
            <div>
              <img src={cs2} />
              <p className="blogCard-header">
                How Talenode Helped India’s Leading BFSI Organization Reduce
                Turnover by 44% Client Challenge:
              </p>
            </div>
            <p className="blogCard-tag">
              India’s leading BFSI organization faced an alarming increase in
              turnover among key revenue...
            </p>
          </button>

          <button
            className={currCS == "3" ? "blog-card curr-blogCard" : "blog-card"}
            onClick={() => setCurrCS(3)}
          >
            <div>
              <img src={cs3} />
              <p className="blogCard-header">
                How Talenode Helped a SaaS MNC Reduce Time to Fill by 40% and
                Enhance Candidate Experience
              </p>
            </div>
            <p className="blogCard-tag">
              A leading SaaS multinational corporation (MNC) faced a significant
              rise in Time to Fill (TTF) for sales roles...
            </p>
          </button>
        </div>

        {currCS == 1 ? (
          <div className="blog-main casestudy-1">
            <p className="blogMain-header">
              How Talenode Helped a Consumer Tech Unicorn Achieve 16% Wage Bill
              Savings
            </p>

            <div className="content-blog">
              <video playsinline autoplay="1" muted loop>
                <source src={cs1} type="video/mp4" />
              </video>
              <p className="blogMain-para blogMain-para-nopadding">
                <b>Client Challenge:</b>
                <br /> A leading Consumer Tech Unicorn aimed to enhance
                profitability, but faced significant challenges in optimizing
                its organizational structure, compensation, and headcount.
                <br /> <br />
                <b>Objective:</b>
                <br />
                • Operate with a lean workforce <br />• Optimize the wage bill{" "}
                <br />• Enhance performance measurement <br /> <br />
                <b>Talenode’s Intervention:</b>
                <br /> Talenode employed a comprehensive, analytics-driven
                approach to diagnose organizational inefficiencies. Key
                interventions included:
                <br />
                <b>1. Data Analytics Framework:</b>
                 Integrated internal HR data with market benchmarks to identify
                compensation disparities and inefficiencies in headcount.
                <br />
              </p>
            </div>

            <p className="blogMain-para">
              <b>2. Layers & Spans Analysis:</b> Conducted a detailed analysis
              of the organization’s hierarchy, revealing inconsistent spans of
              control and an overly complex management structure.
              <br />
              <b>3. Market Benchmarking:</b> Analyzed external compensation
              trends and internal pay parity to identify discrepancies in salary
              structures across departments. <br />
              <b>4. Department Ratios Benchmarking:</b>Evaluated department
              ratios through advanced statistical models, uncovering a
              middle-heavy organization resulting from outdated performance
              measurement practices.
            </p>

            <p className="blogMain-para">
              <b>Findings:</b>
              <br /> The analysis highlighted the need for restructuring due to:
              <br />
              • Inconsistent spans of control.
              <br /> • A middle-heavy organization influenced by historical
              promotion practices.
              <br /> • Significant pay parity issues across departments.
              <br />
              <br />{" "}
              <b>
                Results Over the Following Year Post-Organization Restructuring:
              </b>
              <br />
              • 16% Wage Bill Savings (14% projected) <br /> • 17% Increase in
              Revenue per Employee
              <br /> • 7% Increase in Career Growth Perception
            </p>

            <p className="blogMain-para">
              <b>Conclusion:</b>
              <br /> Talenode's data-driven intervention enabled the Consumer
              Tech Unicorn to optimize its workforce and wage bill while
              enhancing employee satisfaction and performance metrics. This case
              underscores how leveraging analytics can transform HR functions
              into strategic assets.
            </p>

            <p className="blogMain-para">
              <b>Call to Action:</b>
              <br />{" "}
              <b>
                Reach out to Talenode to schedule a conversation and discover
                how we can drive similar results for your organization.
              </b>
            </p>
          </div>
        ) : (
          <></>
        )}
        {currCS == 2 ? (
          <div className="blog-main casestudy-2">
            <p className="blogMain-header">
              How Talenode Helped India’s Leading BFSI Organization Reduce
              Turnover by 44% Client Challenge
            </p>

            <div className="content-blog">
              <img src={cs2} />
              <p className="blogMain-para blogMain-para-nopadding">
                <b>Client Challenge:</b>
                <br /> India’s leading BFSI organization faced an alarming
                increase in turnover among key revenue-producing roles compared
                to the previous year, prompting an urgent need for intervention.
                <br /> <br />
                <b>Objective:</b>
                <br />
                • Identify and mitigate turnover causes <br />• Enhance employee
                retention strategies <br />• Improve overall workforce stability{" "}
                <br /> <br />
                <b>Talenode’s Intervention:</b>
                <br /> Talenode initiated a comprehensive, analytics-driven
                approach to tackle the turnover issue:
                <br />
              </p>
            </div>

            <p className="blogMain-para">
              <b>1. Initial Analysis:</b> Conducted a thorough review of
              employee data, revealing that 41% of the turnover occurred in just
              10% of their branches.
              <br />
              <b>2. Intermediary Action:</b> Engaged in branch-specific
              investigations in A, B, and C branches through: <br />{" "}
              <i>• Manager Reviews: </i>Facilitated discussions with branch
              managers to uncover localized issues.
              <br />
              <i>• Employee Surveys: </i>Gathered feedback from employees to
              identify pain points affecting retention.
              <br />
              <b>3. Impact Analysis & Action:</b> Analyzed the collected data,
              which revealed that compensation disparity, incorrect expectations
              setting, and a lack of learning opportunities were primary drivers
              of attrition. <br />
            </p>

            <p className="blogMain-para">
              <b>Results of Actions on Compensation, Onboarding & Learning:</b>
              <br /> The implementation of branch-specific action plans led to a
              remarkable 44% reduction in turnover, achieving several positive
              outcomes:
              <br />• <b>1.6x Reduction in Hiring Costs: </b>Streamlined hiring
              processes resulted in significant cost savings.
              <br /> • <b>23% Increase in Customer NPS Score:</b> Improved
              employee satisfaction translated into better customer service and
              enhanced customer loyalty.
              <br /> • <b>1.2x Increase in Revenue:</b> A more stable workforce
              led to increased productivity and revenue generation.
            </p>

            <p className="blogMain-para">
              <b>Conclusion:</b>
              <br /> Talenode’s targeted, data-driven interventions enabled the
              BFSI organization to effectively address turnover issues,
              resulting in substantial operational improvements and cost
              savings. This case highlights the importance of leveraging
              analytics to inform HR strategies.
            </p>

            <p className="blogMain-para">
              <b>Call to Action:</b>
              <br />{" "}
              <b>
                Reach out to Talenode to schedule a conversation and learn how
                we can help your organization achieve similar success.
              </b>
            </p>
          </div>
        ) : (
          <></>
        )}
        {currCS == 3 ? (
          <div className="blog-main casestudy-3">
            <p className="blogMain-header">
              How Talenode Helped a SaaS MNC Reduce Time to Fill by 40% and
              Enhance Candidate Experience
            </p>

            <div className="content-blog">
              <img src={cs3} />
              <p className="blogMain-para blogMain-para-nopadding">
                <b>Client Challenge:</b>
                <br /> A leading SaaS multinational corporation (MNC) faced a
                significant rise in Time to Fill (TTF) for sales roles,
                skyrocketing from 60 days to over 90 days, despite offering
                competitive compensation packages.
                <br /> <br />
                <b>Initial Analysis:</b>
                <br />
                Talenode’s analytics revealed that average TTF for positions in
                the India and Indonesia markets escalated from 42 days to 112
                days. Additionally, the number of interviews per position surged
                by 2.3 times, with offer rejection rates notably higher in teams
                with lower average tenures. <br /> <br />
                
              </p>
            </div>

            <p className="blogMain-para pt-4">
            <b>Talenode’s Intervention:</b>
                <br /> To address these challenges, Talenode performed
                regression analysis on candidate experience survey data,
                correlating responses with offer acceptance rates. Findings
                indicated that managers struggled to effectively communicate the
                Employee Value Proposition (EVP), crucial for shaping candidate
                perceptions. We conducted sentiment analysis on qualitative
                feedback from candidates who dropped out of the hiring process,
                revealing that unprofessional interviews and misaligned cultural
                expectations were significant deterrents. This data-driven
                insight led us to develop targeted interventions, including
                tailored training programs for hiring managers to enhance their
                EVP communication and improve interview techniques.
            </p>

            <p className="blogMain-para">
              <b>Impact Analysis & Findings:</b>
              <br /> Our analytical approach guided the organization in
              implementing focused improvements in the interview process and EVP
              communication.
              <br />
              <br /> <b>Results Over a Period of 3 Months:</b>
              <br />
              Following Talenode's recommendations, the organization achieved
              remarkable results: <br />
              • Time to Fill reduced from 96 days to 58 days. <br /> • Candidate
              NPS soared from 12% to 42%.
              <br /> • Interviewer Behavior score improved significantly, rising
              from 23% to 56%.
            </p>

            <p className="blogMain-para">
              <b>Call to Action:</b>
              <br /> Reach out to Talenode to schedule a conversation on how we
              can transform your talent acquisition process.
            </p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default CaseStudies;

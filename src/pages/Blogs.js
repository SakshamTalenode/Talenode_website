import React from "react";
import blog1 from "../assets/blog 1.jpg";

const Blogs = () => {
  return (
    <div className="blogsPage">
      <div className="blog-topics">
        <button className="blog-card">
          <div>
            <img src={blog1} />
            <p className="blogCard-header">
              AI in HR: It’s All About Data (Not Magic)
            </p>
          </div>
          <p className="blogCard-tag">
            AI isn’t a magic solution for HR, but with the right data, guidance,
            and expectations...
          </p>
        </button>

        <button className="blog-card">
          <div>
            <img src={blog1} />
            <p className="blogCard-header">
              AI in HR: It’s All About Data (Not Magic)
            </p>
          </div>
          <p className="blogCard-tag">
            AI isn’t a magic solution for HR, but with the right data, guidance,
            and expectations...
          </p>
        </button>

        <button className="blog-card">
          <div>
            <img src={blog1} />
            <p className="blogCard-header">
              AI in HR: It’s All About Data (Not Magic)
            </p>
          </div>
          <p className="blogCard-tag">
            AI isn’t a magic solution for HR, but with the right data, guidance,
            and expectations...
          </p>
        </button>
      </div>

      <div className="blog-main">
        <p className="blogMain-header">
          AI in HR: It's All About Data (Not Magic)
        </p>
        <div>
          <img src={blog1} />
          <p className="blogMain-para">
            Ever tried uploading an Excel sheet into ChatGPT or asking it to
            analyze a simple HR table, only to get some baffling or downright
            incorrect responses? You’re not alone. The truth is, AI isn’t
            magic—it’s only as good as the data behind it. This is especially
            true in HR, where AI has the potential to revolutionize processes
            but often stumbles if the right groundwork isn’t laid. <br /> <br />
            <b>Where AI Fits in HR</b> <br />
            HR teams look to AI for two main reasons: to boost business growth
            (think recruitment and engagement) or to cut costs by automating
            tedious tasks (like sifting through hundreds of resumes). But before
            we imagine AI swooping in as the ultimate problem-solver, there are
            a few gaps to be aware of:
          </p>
        </div>

        <p className="blogMain-para">
          <b>1. AI and Complexity:</b> AI struggles when faced with complex,
          nuanced data. It’s like giving someone a puzzle where half the pieces
          are missing—it just can’t complete the picture.
          <br />⁠<b>2. AI Fumbles with Numbers:</b> Surprisingly, AI isn’t the
          math genius we thought it would be. Ask it to crunch turnover rates,
          and you might be in for some eyebrow-raising results.
          <br />
          <b>3. ⁠AI Can’t Think Beyond Its Training:</b> While AI excels at
          pattern recognition, it is not great at thinking outside the box.
          Without structured, clear data inputs, it is like trying to make sense
          of a jumbled grocery list; it’ll get some of it right, but not the
          whole thing.{" "}
        </p>

        <p className="blogMain-para">
          <b>AI is Like Fine Wine—It Gets Better with Time</b>
          <br />
          Generative AI, like ChatGPT, is improving, but it's not an overnight
          miracle. Think of it as a process that takes time to mature. Companies
          are eager to deploy AI, expecting instant magic, but the truth is, the
          real transformation happens gradually. Research shows that it can take
          years for organizations to reach full AI maturity, and even then, it's
          only as good as the data you give it. So, if you're feeding it
          questionable data, don't expect miracles. It is more of a slow simmer
          than a quick fix.
        </p>

        <p className="blogMain-para">
          <b>Making AI Work in HR</b> <br />
          Here’s where the data-first approach comes into play. Before expecting
          AI to perform miracles in your HR department, focus on the following:{" "}
          <br />
          <b>1. ⁠Define Clear Use Cases:</b> Be specific about what you want AI
          to do. Don’t just ask it to "help with hiring"; instead, have it
          identify candidates basis specific metrics.
          <br />
          <b>2. ⁠Clean and Organize Your Data:</b> AI is only as good as the
          data it analyzes. If your data is messy, outdated, or inconsistent,
          your AI results will be, too.
          <br />
          <b>3. ⁠Integrate Data Platforms:</b> Create a system where AI can pull
          from various HR sources (HRMS, payroll, performance reviews, employee
          feedback) so it has a full picture of your organization. ⁠<br />
          <b>4. Foster a Data-Driven Culture:</b> Encourage your team to make
          decisions based on data insights rather than gut instincts, which will
          improve AI adoption and effectiveness.
          <br />
        </p>

        <p className="blogMain-para">
          <b>The Secret: Train Your AI</b> <br />
          If you expect AI to be perfect right out of the box, you’re in for a
          surprise. AI, like any tool, requires training—especially when it
          comes to proprietary HR data. It’s essential to teach AI how to
          interpret your specific data sets, rather than relying on generic
          models, which often don’t understand the nuances of your
          organization’s needs. AI isn’t a magic solution for HR, but with the
          right data, guidance, and expectations, it can dramatically improve
          decision-making and streamline processes.
        </p>
      </div>
    </div>
  );
};

export default Blogs;

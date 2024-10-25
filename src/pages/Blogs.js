import React, { useState } from "react";
import blog1 from "../assets/blog 1.jpg";

const Blogs = () => {
  const [currBlog, setCurrBlog] = useState(1);

  return (
    <div className="blogsPage">
      <p className="header-heroProduct">Blogs</p>

      <div className="blog-topics">
        <button
          className={currBlog == "1" ? "blog-card curr-blogCard" : "blog-card"}
          onClick={() => setCurrBlog(1)}
        >
          <div>
            <img src={blog1} />
            <p className="blogCard-header">
              ChatGPT is like Your Child: You need to Nurture it for Long-Term
              Development.
            </p>
          </div>
          <p className="blogCard-tag">
            A child comes into the world with a yet-to-be-developed brain and
            view of the world...
          </p>
        </button>

        <button
          className={currBlog == "2" ? "blog-card curr-blogCard" : "blog-card"}
          onClick={() => setCurrBlog(2)}
        >
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

        <button
          className={currBlog == "3" ? "blog-card curr-blogCard" : "blog-card"}
          onClick={() => setCurrBlog(3)}
        >
          <div>
            <img src={blog1} />
            <p className="blogCard-header">
              ChatGPT matures with Time, Just Like Your Child
            </p>
          </div>
          <p className="blogCard-tag">
            Remember how we discussed children viewing the word from a different
            lens. They take in everything...
          </p>
        </button>
      </div>

      {currBlog == 1 ? (
        <div className="blog-main blog-1">
          <p className="blogMain-header">
            ChatGPT is like Your Child: You need to Nurture it for Long-Term
            Development
          </p>

          <div className="content-blog">
            <img src={blog1} />
            <p className="blogMain-para blogMain-para-nopadding">
              A child comes into the world with a yet-to-be-developed brain and
              view of the world. You don’t expect it to operate on its own –
              rather you feed the child with new learnings every day. Lot of
              times, you also narrate fairy tales to allow the child the luxury
              of living in a dream land and postpone the reality for some time.
              When a child asks you questions which you may want to avoid (how
              are babies born, etc.), you give a different answer, only for the
              child to learn the truth later in life. When a child comes up
              excited to you and narrates a random story or how they saw the
              tooth fairy or Santa coming down the chimney, you laugh and
              appreciate the wonder you have created. But, when the same child
              is feeling unwell or unsafe, your instincts trigger and you act to
              ensure your child is safe and sound. You learn to differentiate
              when your child is faking vs. serious. You don’t take everything
              your child says as true and you also do not take every word for
              granted. You are patient with your child as you know you are
              responsible for shaping their world and all of this is part of the
              their learning. As the child interacts with you and its
              surrounding environment and takes cues from different mediums -
              voice, modulations, eyes, gestures, their world expands and gets
              shaped as they start putting things in context. While they are
              learning, you either reward or punish (both in varying degrees :P)
              your child’s responses and actions to align them better with your
              desired behaviours.
            </p>
          </div>

          <p className="blogMain-para">
            More you interact and give feedback, more they learn. With more
            diverse information, the child becomes versatile at identifying
            connections and starts interpreting, evaluating and creating their
            own version of the world. This is an iterative process and the
            child’s understanding continues to refine with every passing
            interaction and feedback. They may forget a few things and you help
            them recall, reshape their view. You will continue to nurture the
            child, more so till they attain the ability to think independently.
            Once you reach that stage, it’s a win-win situation. While you have
            fulfilled your role as a parent, the child can think and act with
            limited guidance and can even start supporting you. From what I have
            experienced from mine, parents continue to nurture even after
            children think they can operate autonomously (cute!).
          </p>

          <p className="blogMain-para">
            Now, I am inclined to CTRL+F and replace ‘Child’ with ‘Generative AI
            (GenAI)’ and stop the conversation here, but let’s delve a bit
            deeper into this analogy. As an HR professional, I have felt the
            need, more often an urgency, to adopt the latest technologies,
            especially as AI promises to revolutionize talent management, task
            automation and decision-making. In the process of implementing GenAI
            at work, I have often felt frustrated with the guidance and outputs
            from GenAI and end up thinking that it is just not working. Often,
            the feeling spirals to disappointment and hopelessness and I pause
            or even worse, stop my efforts, thereby depriving myself from
            unlocking the true potential of GenAI. When I did more research, I
            realized there are ways in which we can train and mature with the
            model, and as I see my brother and friends raising their children
            around me, I cannot help but compare the two - like raising a child,
            AI needs time, guidance, and patience to fully mature.
          </p>

          <p className="blogMain-para">
            <b>
              What Can HR Leaders Do to Nurture Their AI? Patience is the Key{" "}
            </b>
            <br /> If there’s one thing every parent knows, it’s that growth
            takes time. As much as we want instant results, AI needs nurturing.
            In return, it can become a powerful ally in helping you make
            data-driven talent decisions that truly benefit your organization.
            Simply put: <br />{" "}
            <b>
              {" "}
              •<u> Feed quality data consistently:</u>
            </b>{" "}
            Just as children thrive on healthy food, AI thrives on clean, rich
            data. Be mindful of your data governance practices. <br />
            <b>
              {" "}
              •<u> Reinforce outcomes with feedback:</u>
            </b>{" "}
            AI models need correction when they veer off course. Be ready to
            refine and adjust based on evolving insights from employee data.{" "}
            <br />
            <b>
              •<u> Monitor for biases:</u>
            </b>{" "}
            Regularly check and audit your AI models to ensure they’re not
            producing biased outcomes. Diverse datasets lead to better, more
            inclusive talent decisions. <br />
          </p>

          <p className="blogMain-para">
            For now, we need to give AI the space to grow and with patience,
            thoughtful guidance, and a commitment to seeing it through, GenAI
            will mature into an invaluable tool that can help you transform how
            you lead, engage, and manage talent.
            <br />
            <br />
            <b>
              More to come on this and stay tuned as we traverse the path
              together.
            </b>
          </p>
        </div>
      ) : (
        <></>
      )}
      {currBlog == 2 ? (
        <div className="blog-main blog-2">
          <p className="blogMain-header">
            AI in HR: It's All About Data (Not Magic)
          </p>

          <div className="content-blog">
            <img src={blog1} />
            <p className="blogMain-para ">
              Ever tried uploading an Excel sheet into ChatGPT or asking it to
              analyze a simple HR table, only to get some baffling or downright
              incorrect responses? You’re not alone. The truth is, AI isn’t
              magic—it’s only as good as the data behind it. This is especially
              true in HR, where AI has the potential to revolutionize processes
              but often stumbles if the right groundwork isn’t laid. <br />{" "}
              <br />
              <b>Where AI Fits in HR</b> <br />
              HR teams look to AI for two main reasons: to boost business growth
              (think recruitment and engagement) or to cut costs by automating
              tedious tasks (like sifting through hundreds of resumes). But
              before we imagine AI swooping in as the ultimate problem-solver,
              there are a few gaps to be aware of:
              <br />
              <b>1. AI and Complexity:</b> AI struggles when faced with complex,
              nuanced data. It’s like giving someone a puzzle where half the
              pieces are missing—it just can’t complete the picture.
              <br />⁠<b>2. AI Fumbles with Numbers:</b> Surprisingly, AI isn’t
              the math genius we thought it would be. Ask it to crunch turnover
              rates, and you might be in for some eyebrow-raising results.
              <br />
              <b>3. ⁠AI Can’t Think Beyond Its Training:</b> While AI excels at
              pattern recognition, it is not great at thinking outside the box.
              Without structured, clear data inputs, it is like trying to make
              sense of a jumbled grocery list; it’ll get some of it right, but
              not the whole thing.{" "}
            </p>
          </div>

          <p className="blogMain-para">
            <b>AI is Like Fine Wine—It Gets Better with Time</b>
            <br />
            Generative AI, like ChatGPT, is improving, but it's not an overnight
            miracle. Think of it as a process that takes time to mature.
            Companies are eager to deploy AI, expecting instant magic, but the
            truth is, the real transformation happens gradually. Research shows
            that it can take years for organizations to reach full AI maturity,
            and even then, it's only as good as the data you give it. So, if
            you're feeding it questionable data, don't expect miracles. It is
            more of a slow simmer than a quick fix.
          </p>

          <p className="blogMain-para">
            <b>Making AI Work in HR</b> <br />
            Here’s where the data-first approach comes into play. Before
            expecting AI to perform miracles in your HR department, focus on the
            following: <br /> <b>1. ⁠Define Clear Use Cases:</b> Be specific
            about what you want AI to do. Don’t just ask it to "help with
            hiring"; instead, have it identify candidates basis specific
            metrics.
            <br /> <b>2. ⁠Clean and Organize Your Data:</b> AI is only as good
            as the data it analyzes. If your data is messy, outdated, or
            inconsistent, your AI results will be, too.
            <br /> <b>3. ⁠Integrate Data Platforms:</b> Create a system where AI
            can pull from various HR sources (HRMS, payroll, performance
            reviews, employee feedback) so it has a full picture of your
            organization. ⁠<br />
            <b>4. Foster a Data-Driven Culture:</b> Encourage your team to make
            decisions based on data insights rather than gut instincts, which
            will improve AI adoption and effectiveness.
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
      ) : (
        <></>
      )}
      {currBlog == 3 ? (
        <div className="blog-main blog-3">
          <p className="blogMain-header">
            ChatGPT matures with Time, Just Like Your Child
          </p>

          <div className="content-blog">
            <img src={blog1} />
            <p className="blogMain-para blogMain-para-nopadding">
              Remember how we discussed children viewing the word from a
              different lens. They take in everything—often with excitement, but
              without the context to understand it all. Similarly, GenAI is
              still in its early stages. It can process data in ways we can’t,
              but its understanding of the complexities of the workplace, much
              like a toddler’s understanding of life, is limited by the
              information we feed. And just like you wouldn't expect a child to
              master every skill overnight, we shouldn’t expect AI to perfectly
              understand complex human contexts overnight. The real magic
              happens with consistent guidance, structured feedback, and, above
              all, patience.
              <br />
              <br /> Let’s take a walk down this path to unravel the truth
              behind GenAI growth across stages and how it has tremendous
              potential for talent decisioning, when used correctly.
              <br /> <br />
              <b>Stage 1 - Learning the Basics: It’s All About the Data</b>{" "}
              <br />
              When a child learns their first words, they’re just starting to
              make sense of the world. It’s a humbling realization that, just
              like raising a child, the quality of what we put into the AI
              directly shapes what we get out of it.
            </p>
          </div>

          <p className="blogMain-para">
            Imagine a toddler learning to speak: If the vocabulary they hear is
            limited, they’ll struggle to communicate clearly. The same is true
            for AI—if the data is incomplete or biased, the insights will be
            off-mark. Also, one does not learn BODMAS before addition and
            multiplication, similarly GenAI has a learning curve. It start by
            processing massive amounts of raw data without really understanding
            the intricate nature of workplace dynamics. We need to hone it the
            way we need it. We should not assume that it either knows everything
            or it knows nothing and we need to start from scratch – consider it
            like an equalizer. You need to constantly tune it to hear the
            wonderful music. As an HR professional, I have realized that the
            foundation of any AI initiative is ensuring that the data about
            employees, performance metrics, and organizational culture being
            used is high quality and relevant. A 2023 Harvard Business Review
            study showed that organizations leveraging clean and structured data
            saw 30% better outcomes in predictive models. In the talent
            analytics journey, this implies feeding AI with a healthy “diet” of
            employee data on performance, engagement, or compensation trends to
            identify patterns for critical factors like high performer retention
            or leadership development needs.
          </p>

          <p className="blogMain-para">
            <b>Stage 2 - Trial and Error: Watching AI Grow Through Feedback</b>
            <br />
            Remember the first time your child tried something new and didn’t
            quite get it right? You probably didn’t give up on them. You
            provided encouragement and guidance, and they tried again, learning
            from each mistake. GenAI is no different - like a child who learns
            to walk by falling, it learns through continuous feedback. It might
            predict rising attrition or highlight an underperforming team, but
            the insights won’t always be perfect. That’s when we need to step
            in, refine its understanding, and provide feedback to improve future
            predictions. Companies using reinforcement learning techniques saw
            40% better accuracy in their HR decision models. It’s a reminder
            that while AI can handle a lot, human oversight is crucial in
            helping it learn the nuances of people dynamics, whether it is
            understanding employee engagement, attrition trends or predicting
            future leadership potential, ensuring these predictions are sharper
            the next time.
          </p>

          <p className="blogMain-para">
            <b>Stage 3- Addressing Bias: Teaching AI the Right Lessons</b>
            <br />
            As children grow, they might pick up certain biases from their
            surroundings, often unintentionally, and become overconfident.
            Similarly, I have notices GenAI overlooking potential leaders in
            diverse teams or misinterpreting employee engagement signals. And as
            parents, it’s our responsibility to correct those misunderstandings
            and biases before they become ingrained. A 2024 McKinsey report
            showed that diverse data inputs and human feedback reduced
            algorithmic bias by 20%. Just as we actively shape the values of the
            next generation, we need to monitor and guide AI to ensure it
            supports fairness, equity, and transparency in decision-making and
            prevent errors that could lead to harmful decisions such as unequal
            pay recommendations or biased promotions.
          </p>

          <p className="blogMain-para">
            Hope this gives a good view into why we need to think of ChatGPT as
            a longer-term investment, rather than an instant magic bullet. We
            will get into the nuances of training the model next. <br />
            <br />
            <b>Catch you soon. Happy reading!</b>
          </p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Blogs;

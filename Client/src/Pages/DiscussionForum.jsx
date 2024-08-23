import React from "react";
import MembersCard from '../Components/MembersCard/MembersCard'
import QuestionCard from '../Components/QuestionCard/QuestinCard'
import ReplyCard from "../Components/ReplyCard/ReplyCard";

const DiscussionForum = () => {
  return (
    <>
      <section className="DiscussionForum-Container">
        <main className="DiscussionForum-main">
          <div className="QuestionAndReplies">
            <QuestionCard />
            <ReplyCard />
            <ReplyCard />
            <ReplyCard />
          </div>
          <div className="TextInput">
            <input
              type="text"
              placeholder="Type your text here"
              className="Forum-Input"
            />
          </div>
        </main>

        <div className="DiscussionForum-MembersCard">
          <div className="MembersCard-container">
            <h3>Members</h3>
            <MembersCard />
            <MembersCard />
            <MembersCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default DiscussionForum;

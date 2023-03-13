import Card from "@/components/Card";
import Layout from "@/components/Layout";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import autoAnimate from "@formkit/auto-animate";

const aestheticImage = {
  navImage: `https://res.cloudinary.com/ddv6amwz9/image/upload/w_800,h_176,c_fill/cqz3aoqkisqfsl1esnxj.gif`,
};

function Home() {
  const [todos, setTodos] = useState<Array<{ id: string; value: string }>>([
    {
      id: "1",
      value:
        "Hi there! 👋🏻 Welcome to my ToDo Site! This is a relaxing place where you can easily save and complete your tasks. Just a friendly heads up: I'm not currently using an API to persist your tasks, so please keep that in mind.",
    },
  ]);
  const [input, setInput] = useState<string>("");
  const onAdd = () => {
    setTodos([...todos, { id: Math.random().toString(), value: input }]);
    setInput("");
  };
  const cardParent = useRef(null);

  useEffect(() => {
    cardParent.current && autoAnimate(cardParent.current);
  }, [todos, cardParent]);

  return (
    <>
      <Layout meta={{ title: "ToDo" }}>
        <div className="flex p-3 flex-col py-3">
          <Image
            className="w-full h-44"
            src={aestheticImage.navImage}
            alt="lofi_gif"
            height={0}
            width={0}
          />
          <div className="flex w-full border gap-3 items-center mt-8 px-2 border-[#3C3D41] h-14">
            <div
              className="flex w-[30px] h-[30px] items-center justify-center rounded-full bg-green-500 cursor-pointer"
              onClick={onAdd}
            >
              <strong className="text-xl">+</strong>
            </div>
            <input
              className="w-full bg-transparent text-white focus:outline-none"
              placeholder="Add a task"
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onAdd();
                }
              }}
              value={input}
              required
            />
          </div>
          <div ref={cardParent} className="mt-10">
            <h1 className="text-white font-bold text-xl">Task List 📚</h1>
            {todos.map((todo) => (
              <div key={todo.id}>
                <Card value={todo.value} setTodos={setTodos} id={todo.id} />
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Home;

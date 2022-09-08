import React from "react";
import {
  BsFillEmojiLaughingFill,
  BsFillImageFill,
  BsHeart,
  BsFillChatDotsFill,
  BsReplyAll,
} from "react-icons/bs";

const Home = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <div className="avatar">
            <div className="w-20 rounded ring ring-info ring-offset-base-100 ring-offset-2">
              <img
                src="https://placeimg.com/192/192/people"
                alt="Tailwind-CSS-Avatar-component"
              />
            </div>
            <div className="">
              <h3 className="pl-4 text-lg">Alvin Elain</h3>
            </div>
          </div>
        </div>
        <div className="flex">
          <p className="pr-6">3 min ago</p>
          <p className="flex text-xl">...</p>
        </div>
      </div>
      <div className="mb-5">
        <div>
          <div className="grid grid-rows-3 grid-flow-col gap-y-0 gap-x-2 mb-5">
            <div className="row-span-4 bg-info">
              <div class="card w-80 h-full bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://placeimg.com/400/225/arch"
                    alt="Shoes"
                    className="h-full"
                  />
                </figure>
              </div>
            </div>
            <div className="row-span-4 bg-info">
              <div class="card w-80 h-full bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://placeimg.com/400/225/arch"
                    alt="Shoes"
                    className="h-full"
                  />
                </figure>
              </div>
            </div>
            <div className="row-span-2 col-span-1">
              <div class="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://placeimg.com/400/225/arch"
                    alt="Shoes"
                    className=""
                  />
                </figure>
              </div>
            </div>
            <div className="row-span-2 col-span-1">
              <div class="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                </figure>
              </div>
            </div>
            <div className="row-span-2 col-span-1">
              <div class="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                </figure>
              </div>
            </div>
            <div className="row-span-2 col-span-1">
              <div class="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                </figure>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              mollitia quisquam quasi repellat aut quaerat ab dolor esse
              provident aperiam.
            </p>
          </div>
          <hr className="bg-slate-500" />
          {/* // style={
            //   (style={"height:2px;borderWidth:0;color:gray;backgroundColor:gray;"})
            // } */}
        </div>
      </div>
      <div className="flex">
        <div className="avatar pr-6">
          <div className="w-10 rounded">
            <img
              src="https://placeimg.com/192/192/people"
              alt="Tailwind-CSS-Avatar-component"
            />
          </div>
        </div>
        <input
          type="text"
          placeholder="Add Commenter"
          className="input input-bordered w-full max-w-md"
        />
        <div className="flex px-3 text-2xl items-center">
          <p className="px-2">
            <BsFillEmojiLaughingFill />
          </p>
          <p>
            <BsFillImageFill />
          </p>
        </div>
        <div className="flex px-6 text-2xl items-center">
          <button>
            <BsHeart />
          </button>
          <p className="px-5">
            <BsFillChatDotsFill />
          </p>
          <p>
            <BsReplyAll />
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Home;

import marketplace from "./images/marketplace.gif";
import annotation from "./images/editor-with-annotations.png";
import deployment from "./images/deployment-with-annotations.png";
import mint from "./images/minting-main-cropped.png";

function App() {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col justify-start items-center mx-auto pb-24">
      <div className="flex flex-row w-3/4 mt-24">
        <div className="w-2/3">
          <div className="text-7xl whitespace-pre-line leading-[1.2]">
            <span className="font-bold text-blue-500">Everything</span> artist
            <br></br>need to{" "}
            <span className="font-bold text-purple-500">create</span>,<br></br>
            <span className="font-bold text-green-500">deploy</span>, and
            <span className="font-bold text-red-500"> mint</span>
            <br></br>NFTs.
          </div>
          <div className="mt-8 text-2xl leading-[2.2] ">
            <div>❤️ Create an NFT colleaction in minutes.</div>
            <div>💡 No-code smart contract deployments.</div>
            <div>💎 Customizable, fun minting pages.</div>
            <div className="justify-between flex font-bold mt-10">
              <button className="bg-purple-500 px-10 rounded-md">
                Browse Collections
              </button>
              <button className="bg-none border border-purple-500 rounded-md px-10 text-purple-500">
                I'm a Creator
              </button>
            </div>
          </div>
        </div>
        <div>
          <img src={marketplace} alt="top" />
        </div>
      </div>
      <div className="flex flex-col w-3/4 mt-24">
        <p className="text-6xl font-bold">
          Join thousands of artists on Mintables
        </p>
        <div>Cards</div>
        <div className="mt-28">
          <div className=" text-6xl font-bold">
            <span className="text-purple-500">Create</span> Your NFT Collection
            in our NFT studio
          </div>
          <div className="text-3xl mt-6 mb-16">
            Upload your artwork, and our NFT maker will generate unique NFT's
            for you.
          </div>
          <img src={annotation} alt="anootation" />
        </div>
        <div className="mt-28">
          <div className=" text-6xl font-bold">
            <span className="text-green-500">Deploy</span> a NFT smart contract,
            directly<br></br>through the app.
          </div>
          <div className="text-3xl mt-6 mb-16">
            Upload your artwork, and our NFT maker will generate unique NFT's
            for you.
          </div>
          <img src={deployment} alt="anootation" />
        </div>
        <div className="mt-28">
          <div className=" text-6xl font-bold">
            <span className="text-red-500">Mint</span> your NFT's directly
            through Mintables.
          </div>
          <div className="text-3xl mt-6 mb-16">
            You can download your generated NFT's or your fans can use our
            pre-built and customizable minting pages to mint NFT's
          </div>
          <img
            src={mint}
            alt="anootation"
            className="shadow-lg shadow-blue-50"
          />
        </div>
      </div>
    </div>
  );
}

export default App;

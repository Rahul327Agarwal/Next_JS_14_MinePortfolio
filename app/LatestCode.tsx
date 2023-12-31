import userData from "../constants/data";
import { getLatestRepos } from "../lib/getLatestRepos";

interface LatestCodeProps {
  // Add any props if needed
}

type GithubRepoCard = {
  name: string;
  description: string;
  clone_url: string;
};

const LatestCode: React.FC<LatestCodeProps> = async () => {
  let token = process.env.GITHUB_AUTH_TOKEN;
  const repos = await getLatestRepos(userData, token);

  return (
    <section className="bg-gray-100 mt-2 dark:bg-gray-900 pb-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:pt-14 mx-10">
          <h1 className="text-6xl lg:text-7xl max-w-lg font-bold my-20 md:my-0 dark:text-gray-600 text-center ">
            Latest Code
          </h1>

          <a
            href={`${process.env.MyGitHubUrl}`}
            target="_blank"
            className="mb-20 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center dark:text-gray-700"
          >
            <svg
              xmlns={`${process.env.W3URL}`}
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-up-right-square"
              stroke="4"
              strokeWidth="4"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
              />
            </svg>
            <p>View GitHub</p>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 mt-20 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-10 gap-y-20">
        {/* Single github Repo */}

        {repos &&
          repos.map(
            ({ name, description, clone_url }: GithubRepoCard, idx: number) => (
              <GithubRepoCard
                name={name}
                clone_url={clone_url}
                description={description}
                key={idx}
              />
            )
          )}
      </div>
    </section>
  );
};

const GithubRepoCard = ({ name, description, clone_url }: GithubRepoCard) => {
  return (
    <div className="github-repo">
      <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
        {name}
      </h1>
      <p className="text-base font-normal my-4 text-gray-500">{description}</p>
      <a
        href={clone_url}
        target="_blank"
        className="font-semibold group flex flex-row space-x-2 w-full items-center"
      >
        <p>View Repository </p>
        <div className="transform  group-hover:translate-x-2 transition duration-300">
          &rarr;
        </div>
      </a>
    </div>
  );
};

export default LatestCode;

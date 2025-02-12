import { socialsItems } from "../data/socialsItems"

export function Home() {
  return (
    <div className="py-12 sm:py-24 flex items-center justify-center min-h-[calc(100vh-4rem)]">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-slate-800 sm:text-5xl md:text-6xl">
          <span className="block">Hi, I'm Youssef Samaan</span>
          <span className="block text-slate-600">Computer Science Student</span>
        </h1>
        <p className="mt-6 text-base text-slate-500 sm:text-lg md:text-xl">
          Passionate about artificial intelligence, data science, software engineering, and data engineering.
          I love solving problems, learning new things and finding elegant solutions to complex problems.
          I am currently pursuing my Bachelor's in Computer Science at McGill University.
        </p>


        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 mt-6">
          {socialsItems.map((item, index) => (
            <a
              key={index}
              href={item.action}
              target="_blank"
              className="flex items-center justify-center px-5 py-3 text-lg font-medium rounded-lg bg-slate-100 text-slate-900 hover:bg-slate-200 transition w-48"
            >
              <item.icon className="mr-2 h-6 w-6" />
              {item.label}
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}
const Page_Title = () => {
  return (
    <div>
      <div
        className={`container mx-auto bg-center relative photo1 overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center`}
        //   style="background-image: url('/src/assets/Image/image1.jpg')"
      >
        <div
          className="absolute bgStyle bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          // style="background-color: rgba(0, 0, 0, 0.6)"
        >
          <div className="flex h-full items-center justify-center">
            <div className="text-white">
              <h2 className="mb-4 text-4xl font-semibold">All Food Items</h2>
              <h4 className="mb-6 text-xl font-semibold">Subheading</h4>
              <button
                type="button"
                className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                Call to action
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page_Title;

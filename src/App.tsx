import { BottomlessPage, Page } from "./Page";

function App() {

  const knownNumberOfPages = [1, 2, 3];
  const unknownNumberOfItems = [1, 2, 3, 4, 5, 6];
  const loremIpsum = `
 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at varius arcu. Etiam nec risus posuere, euismod nisi et, semper felis. Maecenas sollicitudin risus velit, nec feugiat metus venenatis nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam consequat, purus id rutrum condimentum, mi sapien tristique felis, ac vestibulum nibh ante in dui. Aliquam augue urna, sollicitudin nec sem sed, euismod luctus dolor. Cras luctus imperdiet mollis. Cras auctor orci eget ultricies aliquam. Nullam viverra, justo vel placerat maximus, ligula dolor iaculis arcu, eu dignissim eros orci at nunc. Aliquam erat volutpat. Pellentesque gravida lectus ultrices, tempus quam eu, viverra leo. Sed in massa a quam laoreet aliquam. Nunc mattis tincidunt risus, eu accumsan felis vulputate quis. 
      
      `;
  return (
    <>
      {knownNumberOfPages.map((num) => (
        <Page>
          <div className="flex items-center justify-center h-full">
            <div>
              <h1 className="text-black">{`This is page ${num}! `}</h1>
            </div>
          </div>
        </Page>
      ))}
      <BottomlessPage>
        <div className="p-20">
          <h1 className="text-black">This one is boooottomless</h1>
          <p className="text-black">
            It will expand at will, but be careful! You might need to break
            things manually
          </p>
          <div>
          {unknownNumberOfItems.map((_) => (
            <div className="break-inside-avoid border-black border mt-10 pt-10">
              <h2 className="font-bold">Dont break this section, por favor</h2>
              <p>{loremIpsum}</p>
            </div>
          ))}
          </div>
        </div>
      </BottomlessPage>
    </>
  );
}

export default App;

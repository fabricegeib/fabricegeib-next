import { useState, useEffect } from "react";
import Image from "next/image";

function WordpressPosts() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  //366.fabricegeib.com/wp-json/wp/v2/media

  https: useEffect(() => {
    setLoading(true);
    fetch("https://366.fabricegeib.com/wp-json/wp/v2/posts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <div className="wordpress">
        <h2>Wordpress</h2>
        <p>Loading...</p>
      </div>
    );

  if (!data)
    return (
      <div className="wordpress">
        <h2>Wordpress</h2>
        <p>No Wordpress data</p>
      </div>
    );

  console.log("Wordpress :", data);

  return (
    <div className="wordpress">
      <h2>Wordpress</h2>

      <div className="cards wordpress">
        {data.map((post, index) => (
          <div className="card wordpress" key={post.id}>
            {/* {post.better_featured_image && (
              <Image src={post.better_featured_image.source_url} alt={post.name} width="120" height="120" />
            )} */}
            <h2>{post.title.rendered}</h2>
            <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
            <p>{post.category}</p>
            <a href={post.link}>lien</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WordpressPosts;

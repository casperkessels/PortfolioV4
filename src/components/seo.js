import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

function SEO({ description, meta, image: metaImage, title }) {
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              author { name }
              description
              siteUrl
              social { twitter }
            }
          }
        }
      `}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        const image =
          metaImage && metaImage.src
            ? `${data.site.siteMetadata.siteUrl}${metaImage.src}`
            : null;
        return (
          <Helmet
            htmlAttributes={{
              lang: "en"
            }}
            title={title}
            meta={
              [
                {
                  name: "description",
                  content: metaDescription
                },
                {
                  property: "og:title",
                  content: title
                },
                {
                  property: "og:description",
                  content: metaDescription
                },
                {
                  name: "twitter:creator",
                  content: data.site.siteMetadata.author
                },
                {
                  name: "twitter:title",
                  content: title
                },
                {
                  name: "twitter:description",
                  content: metaDescription
                }
              ]
                .concat(
                  metaImage
                    ? [
                        {
                          property: "og:image",
                          content: image
                        },
                        {
                          property: "og:image:width",
                          content: metaImage.width
                        },
                        {
                          property: "og:image:height",
                          content: metaImage.height
                        },
                        {
                          name: "twitter:card",
                          content: "summary_large_image"
                        }
                      ]
                    : [
                        {
                          name: "twitter:card",
                          content: "summary"
                        }
                      ]
                )
                .concat(meta)
            }
          />
        );
      }}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}
SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
  }),
};

export default SEO;
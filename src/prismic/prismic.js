import {createPrismic} from "@prismicio/vue";

const prismic = createPrismic({
    endpoint: "risidio-assignment",
    clientConfig: {
        defaultParams: {
            routes: [
                /*{type: "home", path: "/"},*/
                {type: "description", path: "/description"},
                {type: "full_description", path: "/full_description"},
            ]
        }
    }
});

export default prismic;
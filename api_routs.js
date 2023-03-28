export const API_ROUTS = {

    "images" : {
        "get" : "/api/get/images",
        "post" : "/api/post/images",
        "put" : "/api/put/images",
        "delete" : "/api/delete/image/:id"
        
    },

    "ultimate_analysis" : {
        "get" : "/api/get/ultimate_analysis",
        "post" : "/api/post/ultimate_analysis",
        "put" : "/api/put/ultimate_analysis",
        "delete" : "/api/delete/ultimate_analysis/:id",
        "set_end" : "/api/put/ultimate_analysis/set_end",
        "set_result" : "/api/put/ultimate_analysis/set_result"
        
    },

    "shuffle" : {
        "get" : "/api/get/shuffle"
    },

    "voice_script" : {
        "get" : "/api/get/voice_script",
        "post" : "/api/post/voice_script",
        "put" : "/api/put/voice_script",
        "delete" : "/api/delete/voice_script/:id",
        "get_required_script" : "/api/get/required_voice_script"
    },

    "custom_query" : {
        "get" : "/api/get/custom_query"
    }
}
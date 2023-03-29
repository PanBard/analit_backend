export const API_ROUTS = {

    "cation_script_flow" : {
        "get" : "/api/get/cation_script_flow",
        "post" : "/api/post/cation_script_flow",
        "put" : "/api/put/cation_script_flow",
        "delete" : "/api/delete/cation_script_flow/:id",
   },

   "anion_script_flow" : {
        "get" : "/api/get/anion_script_flow",
        "post" : "/api/post/anion_script_flow",
        "put" : "/api/put/anion_script_flow",
        "delete" : "/api/delete/anion_script_flow/:id",
},

   "cation_voice_script" : {
        "get" : "/api/get/cation_voice_script",
        "post" : "/api/post/cation_voice_script",
        "put" : "/api/put/cation_voice_script",
        "delete" : "/api/delete/cation_voice_script/:id",
        "get_required_script" : "/api/get/required_cation_voice_script"
},

    "anion_voice_script" : {
        "get" : "/api/get/anion_voice_script",
        "post" : "/api/post/anion_voice_script",
        "put" : "/api/put/anion_voice_script",
        "delete" : "/api/delete/anion_voice_script/:id",
        "get_required_script" : "/api/get/required_anion_voice_script"
},


    "cation_analysis" : {
        "get" : "/api/get/cation_analysis",
        "post" : "/api/post/cation_analysis",
        "put" : "/api/put/cation_analysis",
        "delete" : "/api/delete/cation_analysis/:id",
        "set_end" : "/api/put/cation_analysis/set_end",
        "set_result" : "/api/put/cation_analysis/set_result"
        
    },

    "shuffle" : {
        "get" : "/api/get/shuffle"
    },

  
    "custom_query" : {
        "get" : "/api/get/custom_query"
    }
}
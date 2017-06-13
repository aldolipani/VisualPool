
// @GENERATOR:play-routes-compiler
// @SOURCE:/Users/aldo/Projects/GitHub/VisualPool/backend/conf/routes
// @DATE:Tue Jun 13 17:03:50 EDT 2017

import play.api.mvc.{ QueryStringBindable, PathBindable, Call, JavascriptLiteral }
import play.core.routing.{ HandlerDef, ReverseRouteContext, queryString, dynamicString }


import _root_.controllers.Assets.Asset

// @LINE:1
package controllers {

  // @LINE:1
  class ReverseHomeController(_prefix: => String) {
    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:1
    def index(): Call = {
    
      () match {
      
        // @LINE:1
        case ()  =>
          import ReverseRouteContext.empty
          Call("GET", _prefix)
      
      }
    
    }
  
  }

  // @LINE:5
  class ReverseAssets(_prefix: => String) {
    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:5
    def at(path:String, file:String): Call = {
    
      (path: @unchecked, file: @unchecked) match {
      
        // @LINE:5
        case (path, file) if path == "/public/assets" =>
          implicit val _rrc = new ReverseRouteContext(Map(("path", "/public/assets")))
          Call("GET", _prefix + { _defaultPrefix } + "assets/" + implicitly[PathBindable[String]].unbind("file", file))
      
        // @LINE:6
        case (path, file) if path == "/public/fonts" =>
          implicit val _rrc = new ReverseRouteContext(Map(("path", "/public/fonts")))
          Call("GET", _prefix + { _defaultPrefix } + "fonts/" + implicitly[PathBindable[String]].unbind("file", file))
      
      }
    
    }
  
  }


}

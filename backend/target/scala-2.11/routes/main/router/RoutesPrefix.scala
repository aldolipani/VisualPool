
// @GENERATOR:play-routes-compiler
// @SOURCE:/Users/aldo/Projects/GitHub/VisualPool/backend/conf/routes
// @DATE:Tue Aug 08 16:51:37 JST 2017


package router {
  object RoutesPrefix {
    private var _prefix: String = "/"
    def setPrefix(p: String): Unit = {
      _prefix = p
    }
    def prefix: String = _prefix
    val byNamePrefix: Function0[String] = { () => prefix }
  }
}

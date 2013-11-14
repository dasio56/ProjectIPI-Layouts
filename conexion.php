<?php
class Conexion {
   
    private $server="localhost";
    private $usr="postgres";
    private $pass="Chris210591";
    private $db="layout";
    
    
    public function __construct() 
    {
    
    }
    
    public function objConexion()
    {
        $cs="host=$this->server port=5432 dbname=$this->db user=$this->usr password=$this->pass";
        $con=  pg_connect($cs) or die("Error: Acceso denegado al sitio");   
        return $con;        
    }
    
    public function cud($query,$nameQuery,$parametros)
    {
        pg_prepare($this->objConexion(),$nameQuery,$query);
        if (pg_execute($this->objConexion(),$nameQuery,$parametros) == TRUE)
        {
            return true;
        }  
        else 
        {
            return pg_errormessage($this->objConexion());
        }   
    }
    
    public function extraer($query,$nameQuery,$parametros)
    {
        pg_prepare($this->objConexion(),$nameQuery,$query);
        $respuesta=  pg_execute($this->objConexion(),$nameQuery,$parametros);
        return $respuesta;
    }

    public function insertarElemento($elemento,$contenido)
    {
        $sql = "insert into elementos(tipoelemento,contenido) values($1,$2)";
        $parametros = array($elemento,$contenido);
        $this->cud($sql,"insertar",$parametros);
    }

    public function obtenerElementos()
    {
        $sql = "select idelemento,tipoelemento,contenido from elementos";
        return $this->extraer($sql,"obtener",array());
    }
}
?>
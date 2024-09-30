import { api } from '../services/api'
import { createClient } from '@supabase/supabase-js'


export const getPosts = async () => {
    const {data} = await api.get('/posts?select=*'); 

    if(data){
        return data;
    }

    return [{}]
}

export const getPostBySlug = async (id) => {
  const supabase = createClient('https://mydkvqwobexvhliaqybz.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15ZGt2cXdvYmV4dmhsaWFxeWJ6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNzY1Mzk3MiwiZXhwIjoyMDQzMjI5OTcyfQ.3OFf65R3GXe-PIXeMcmDgxHLjlmMZqvyuyzfTTG916U')
   
  //TODO: BUSCAR UM POST EM ESPECIFICO.
    const {data, error} = await supabase.from('posts').select().eq('id',`${id}`)
    const retorno = error == null ? data[0] : { title:error.message }
    return retorno
}
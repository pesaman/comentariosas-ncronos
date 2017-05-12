get '/' do
  # La siguiente linea hace render de la vista 
  # que esta en app/views/index.erb
  erb :index

  # post '/create_comment' do 
  #   p comentario = params[:comentario]
  #   p autor = params[:autor]
  #   return "Comment Created"
  # end
end

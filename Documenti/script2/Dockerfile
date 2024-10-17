# Usa l'immagine di base di Nginx
FROM nginx:1.22

# Rimuovi i file di default di Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia il file Ordinamentoexcel.html nella directory di default di Nginx e rinominalo come index.html
COPY Ordinamentoexcel.html /usr/share/nginx/html/index.html

# Imposta i permessi corretti sui file
RUN chmod -R 755 /usr/share/nginx/html


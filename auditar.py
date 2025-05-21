import os
from PIL import Image

# Pasta com as imagens
input_dir = 'images/'
# Arquivo de saída
output_file = 'relatorio_imagens.csv'

# Abrir o arquivo para escrita
with open(output_file, 'w') as f:
    f.write('arquivo,resolução,tamanho_kb\n')
    
    for filename in os.listdir(input_dir):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
            filepath = os.path.join(input_dir, filename)
            
            # Abrir imagem
            with Image.open(filepath) as img:
                largura, altura = img.size
            
            # Tamanho do arquivo em KB
            tamanho_kb = round(os.path.getsize(filepath) / 1024, 1)
            
            # Escrever no arquivo
            f.write(f"{filename},{largura}x{altura},{tamanho_kb}\n")

print(f"Relatório gerado em: {output_file}")

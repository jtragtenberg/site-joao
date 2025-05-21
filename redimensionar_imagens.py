import os
from PIL import Image
import csv

# Pastas
input_dir = 'images/'
output_dirs = {
    '400': 'images_400px/',
    '800': 'images_800px/',
    'icon': 'images_icon/'
}

# Criar pastas se não existirem
for dir in output_dirs.values():
    os.makedirs(dir, exist_ok=True)

# Função de redimensionamento
def redimensionar(imagem_path, output_path_base, largura, manter_extensao=True):
    with Image.open(imagem_path) as img:
        ratio = largura / img.width
        nova_altura = int(img.height * ratio)
        img_resized = img.resize((largura, nova_altura), Image.LANCZOS)
        
        # Decide extensão de saída
        if manter_extensao and img.mode in ("RGBA", "LA"):
            extensao_saida = '.png'
        else:
            extensao_saida = '.jpg'
            if img_resized.mode in ("RGBA", "P", "LA"):
                img_resized = img_resized.convert("RGB")

        output_path = output_path_base + extensao_saida
        img_resized.save(output_path, quality=85)
        print(f"✅ Salvo: {output_path}")

# Ler o CSV
with open('relatorio_imagens.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    
    for row in reader:
        filename = row['arquivo']
        filepath = os.path.join(input_dir, filename)
        
        nome_base, ext = os.path.splitext(filename.lower())

        # Para projetos → 400px e 800px
        if nome_base not in ['beija-flor', 'retrato']:
            for size in ['400', '800']:
                out_base = os.path.join(output_dirs[size], f"{nome_base}_{size}px")
                redimensionar(filepath, out_base, int(size))
        
        # Ícones especiais
        if nome_base == 'beija-flor':
            out_base

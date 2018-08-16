# docker-demo
docker 容器练习


### 1. 生成镜像
> -t 指定 镜像 名字
```bash
docker image build -t koa-demo .
```

### 2. 生成容器
> -p 本地端口 : 镜像端口  -it 映射当前 shell

```bash
docker container run -p 8080:3000 -it docker-demo /bin/bash
```

### 3. 查看容器

```bash
docker container ls
```

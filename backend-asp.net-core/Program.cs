using Config;
using Microsoft.EntityFrameworkCore;
using Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("Policy1",
        policy =>
        {
            policy.WithOrigins("http://localhost:4200")
                    .AllowAnyMethod()
                    .AllowAnyHeader();
        });

});

//controllers
builder.Services.AddControllers();

// add service 
builder.Services.AddScoped<IProductService, ProductService>();

// add dbContext
builder.Services.AddDbContext<ApplicationDbContext>(
    options => options.UseNpgsql());

var app = builder.Build();
app.UseHttpsRedirection();


// app.UseRouting();

/* 

 */
app.UseCors();

// app.UseAuthorization();

// map attribute routed controllers
app.MapControllers();

app.Run();
